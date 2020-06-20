#!/usr/bin/env python
# -*- coding: utf-8 -*-
#the next line is only needed for python2.x and not necessary for python3.x
from __future__ import print_function, division

#import pygame
import pyjsdl as pygame


def num_live_neighbours(i, j, board):
    """Calculate the number of live neighbour cells"""
    count = 0
    m = len(board)
    n = len(board[0])
    if (j >= 1):
        count += board[i][j-1]
    if (j < n-1):
        count += board[i][j+1]
    if (i >= 1):
        count += board[i-1][j]
    if (i < m-1):
        count += board[i+1][j]
    if (i >= 1 and j >= 1):
        count += board[i-1][j-1]
    if (i >= 1 and j < n-1):
        count += board[i-1][j+1]
    if (i < m-1 and j >= 1):
        count += board[i+1][j-1]
    if (i < m-1 and j < n-1):
        count += board[i+1][j+1]
    return count

def make_copy(board):
    return [row[:] for row in board]
           

def gameOfLife(board):
    """
    Given a board with m by n cells, compute and return the next board state
    1. Any live cell with fewer than two live neighbors dies
    2. Any live cell with two or three live neighbors lives
    3. Any live cell with more than three live neighbors dies
    4. Any dead cell with exactly three live neighbors becomes a live cell
    """
    m = len(board)
    n = len(board[0])
    b = make_copy(board)
    for i in range(m):
        for j in range(n):
            nnb = num_live_neighbours(i, j, b)
            if board[i][j] == 1:
                if (nnb < 2):
                    board[i][j] = 0
                elif (nnb == 2 or nnb == 3):
                    board[i][j] = 1
                elif (nnb > 3):
                    board[i][j] = 0
            else:
                if (nnb == 3):
                    board[i][j] = 1

    return board


"""
start = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
print(gameOfLife(start))
"""
pygame.init()
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480
screen=pygame.display.set_mode((SCREEN_WIDTH,SCREEN_HEIGHT))
background = pygame.Surface(screen.get_size())
background.fill((255,255,255))     # fill the background white
background = background.convert()  # prepare for faster blitting


clock = pygame.time.Clock()
FPS = 1 # desired framerate in frames per second. try out other values !

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


def run():
    mainloop = True
    playtime = 0.0
    global board
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
        #pygame.display.set_caption("Frame rate: {:0.2f} frames per second."
	#    		           " Playtime: {:.2} seconds".format(
	#    		           clock.get_fps(),playtime))
        #pygame.display.flip()      # flip the screen like in a flipbook

#run()
pygame.display.setup(run)
