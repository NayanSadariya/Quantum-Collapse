def calculate_win_probability(board_state):
    """
    Calculate win probabilities for each player based on current board state
    Returns: Dictionary with probabilities for X and O
    """
    x_probability = 0
    o_probability = 0
    
    # Convert board state to probability matrix
    for row in board_state:
        for cell in row:
            if cell['superposition']:
                x_count = sum(1 for move in cell['superposition'] if move['player'] == 'X')
                o_count = sum(1 for move in cell['superposition'] if move['player'] == 'O')
                total = len(cell['superposition'])
                x_probability += x_count / total
                o_probability += o_count / total
    
    return {
        'X': x_probability / 9,  # Normalize by board size
        'O': o_probability / 9
    }