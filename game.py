#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
003_static_blit.py
static blitting and drawing
url: http://thepythongamebook.com/en:part2:pygame:step003
author: horst.jens@spielend-programmieren.at
licence: gpl, see http://www.gnu.org/licenses/gpl.html

work with python3.4 and python2.7

Blitting a surface on a static position
Drawing a filled circle into ballsurface.
Blitting this surface once.
introducing pygame draw methods
The ball's rectangular surface is black because the background
color of the ball's surface was never defined nor filled."""


#the next line is only needed for python2.x and not necessary for python3.x
from __future__ import print_function, division

from conway import *
import pygame
pygame.init()
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480
screen=pygame.display.set_mode((SCREEN_WIDTH,SCREEN_HEIGHT))
background = pygame.Surface(screen.get_size())
background.fill((255,255,255))     # fill the background white
background = background.convert()  # prepare for faster blitting


clock = pygame.time.Clock()
mainloop = True
FPS = 1 # desired framerate in frames per second. try out other values !
playtime = 0.0

r_pentomino = [[0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,1,1,0,0,0,0],
              [0,1,1,0,0,0,0,0],
              [0,0,1,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              ]

acorn = [[0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,1,0,0,0,0,0,0,0],
         [0,0,0,0,1,0,0,0,0,0],
         [0,1,1,0,0,1,1,1,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         ]

glider = [[0,0,0,0,0,0,0,0,0,0],
         [0,0,1,0,0,0,0,0,0,0],
         [0,0,0,1,0,0,0,0,0,0],
         [0,1,1,1,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         ]

board = glider


def render_my_game(board):
    screen.blit(background, (0,0))     # blit the background on the screen (overwriting all)
    background.fill((255,255,255))     # fill the background white

    m = len(board)
    n = len(board[0])
    for i in range(m):
        for j in range(n):
            if (board[i][j] == 1):
                pygame.draw.rect(background, (0,0,0), (SCREEN_WIDTH/2-m * 10+ i*10, SCREEN_HEIGHT/2-n*10 + j*10, 8, 8))
    pygame.display.flip()      # flip the screen like in a flipbook

while mainloop:
    milliseconds = clock.tick(FPS) # do not go faster than this frame rate
    playtime += milliseconds / 1000.0
    # ----- event handler -----
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            mainloop = False # pygame window closed by user
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                mainloop = False # user pressed ESC

    board = gameOfLife(board)
    render_my_game(board)
    pygame.display.set_caption("Frame rate: {:0.2f} frames per second."
                               " Playtime: {:.2} seconds".format(
                               clock.get_fps(),playtime))
    #pygame.display.flip()      # flip the screen like in a flipbook
print("this 'game' was played for %.2f seconds" % playtime)
