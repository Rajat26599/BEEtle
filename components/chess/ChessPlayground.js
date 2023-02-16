import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import Chessboard from "chessboardjsx";
import { Chess, ChessInstance, ShortMove } from "chess.js";

import PlayerContainer from './PlayerContainer';
import MovesContainer from './MovesContainer';

const ChessPlayground = () => {
    const [chess] = useState(new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"));
    const [fen, setFen] = useState(chess.fen());
    const [time, setTime] = useState('5:00');
    const [whiteMoves, setWhiteMoves] = useState([]);
    const [blackMoves, setBlackMoves] = useState([]);

    const handleMove = (move) => {
        // Line 29 validates the user move.
        try {
            const playerMove = chess.move(move);
            setTimeout(() => {
                const moves = chess.moves();
                // Lines 33-28: Computer random move.
                if (moves.length > 0) {
                  const computerMove = moves[Math.floor(Math.random() * moves.length)];
                  chess.move(computerMove);
                  setFen(chess.fen());
                  setBlackMoves([...blackMoves, computerMove]);
                } else {
                    alert("game over");
                }
              }, 300);
              // Sets state of chess board
              setFen(chess.fen());
              setWhiteMoves([...whiteMoves, playerMove.san]);
        } catch {
            console.log("error");
        };
      };
    
    return (
        <View style={styles.container}>
            <PlayerContainer playerName={2} time={time} />
            <Chessboard
                width={400}
                position={fen}
                // onDrop prop tracks everytime a piece is moved.
                // The rest is handled in the the handleMove function.
                onDrop={(move) =>
                    handleMove({
                    from: move.sourceSquare,
                    to: move.targetSquare,
                    // This promotion attribute changes pawns to a queen if they reach the other side of the board.
                    promotion: "q",
                    })
                }
            />
            <PlayerContainer playerName={1} time={time} />
            <MovesContainer whiteMoves={whiteMoves} blackMoves={blackMoves} />
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
})

export default ChessPlayground;