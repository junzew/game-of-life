import copy


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
    b = copy.deepcopy(board)
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
