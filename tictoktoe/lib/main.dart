import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key); // added key

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tic-Tac-Toe',
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      themeMode: ThemeMode.light,
      home: const TicTacToe(), // added const
      debugShowCheckedModeBanner: false,
    );
  }
}

class TicTacToe extends StatefulWidget {
  const TicTacToe({Key? key}) : super(key: key); // added key

  @override
  State<TicTacToe> createState() => _TicTacToeState();
}

class _TicTacToeState extends State<TicTacToe> {
  List<String> board = List.filled(9, '', growable: false);
  String currentPlayer = 'X';
  int scoreX = 0;
  int scoreO = 0;
  ThemeMode currentTheme = ThemeMode.light;

  void _handleTap(int index) {
    if (board[index] == '') {
      setState(() {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
      });
      _checkWinner();
    }
  }

  void _checkWinner() {
    List<List<int>> winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var combination in winningCombinations) {
      if (board[combination[0]] != '' &&
          board[combination[0]] == board[combination[1]] &&
          board[combination[1]] == board[combination[2]]) {
        _updateScore(board[combination[0]]);
        _showWinnerDialog(board[combination[0]]);
        return;
      }
    }

    if (!board.contains('')) {
      _showWinnerDialog('Draw');
    }
  }

  void _updateScore(String winner) {
    setState(() {
      if (winner == 'X') {
        scoreX++;
      } else if (winner == 'O') {
        scoreO++;
      }
    });
  }

  void _showWinnerDialog(String winner) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        title: Text(
          winner == 'Draw' ? 'Game Over' : 'Congratulations!',
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
        ),
        content: Text(
          winner == 'Draw'
              ? 'It\'s a draw!'
              : 'Player $winner has won the game!',
          style: const TextStyle(fontSize: 18),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              _resetGame();
            },
            child: const Text(
              'Play Again',
              style: TextStyle(color: Colors.deepPurple, fontSize: 18),
            ),
          ),
        ],
      ),
    );
  }

  void _resetGame() {
    setState(() {
      board = List.filled(9, '', growable: false);
      currentPlayer = 'X';
    });
  }

  void _toggleTheme() {
    setState(() {
      currentTheme =
          currentTheme == ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          currentTheme == ThemeMode.light
              ? 'Switched to Light Theme'
              : 'Switched to Dark Theme',
        ),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    double gridSize = MediaQuery.of(context).size.width * 0.8;

    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Tic-Tac-Toe'),
          centerTitle: true,
          actions: [
            IconButton(
              icon: const Icon(Icons.color_lens),
              onPressed: _toggleTheme,
            ),
          ],
        ),
        body: AnimatedContainer(
          duration: const Duration(milliseconds: 500),
          decoration: BoxDecoration(
            gradient: currentTheme == ThemeMode.light
                ? const LinearGradient(
                    colors: [Colors.deepPurple, Colors.purpleAccent],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  )
                : const LinearGradient(
                    colors: [Colors.black87, Colors.grey],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
          ),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const SizedBox(height: 20),
                SizedBox(
                  width: gridSize,
                  height: gridSize,
                  child: GridView.builder(
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      mainAxisSpacing: 8.0,
                      crossAxisSpacing: 8.0,
                    ),
                    itemCount: 9,
                    itemBuilder: (context, index) {
                      return GestureDetector(
                        onTap: () => _handleTap(index),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 300),
                          decoration: BoxDecoration(
                            color: board[index] == ''
                                ? (currentTheme == ThemeMode.light
                                    ? Colors.white
                                    : Colors.black26)
                                : board[index] == 'X'
                                    ? Colors.blueAccent
                                    : Colors.redAccent,
                            borderRadius: BorderRadius.circular(12),
                            boxShadow: const [
                              BoxShadow(
                                color: Colors.black38,
                                blurRadius: 4,
                                offset: Offset(2, 2),
                              )
                            ],
                          ),
                          child: Center(
                            child: Text(
                              board[index],
                              style: TextStyle(
                                fontSize: gridSize / 5,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
                const SizedBox(height: 20),
                Text(
                  'Player Turn: $currentPlayer',
                  style: const TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 30),
                Card(
                  color: Colors.white.withOpacity(0.9),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: Column(
                      children: [
                        const Text(
                          'Scoreboard',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.deepPurple,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Player X: $scoreX | Player O: $scoreO',
                          style: const TextStyle(
                            fontSize: 18,
                            color: Colors.black87,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 20),
                const Text(
                  'Developed by Phanindra',
                  style: TextStyle(
                    fontSize: 18,
                    color: Colors.white70,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
