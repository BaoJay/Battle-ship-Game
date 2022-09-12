## Battle ship Game: Guess a number to hit the ship, until it sinks.
#### Goal: Take the best guesses to sink their ship!

=================================
### START GAME
Declare *theShipLocation* variable
    location1 = 3
    location2 = location1 + 1
    location3 = location1 + 2
Declare *guess* (which is store the user's input)
Declare *totalGuess* (which count the user's guess)
Declare *hit* (value is increase when the guess is matched the ship location)
Declare *isSunk* (boolean value, to check if the hit equals to 3)

Random *theShipLocation*
WHILE *isSunk* is false (The ship hasn't sunk yet)
    Guess a number --> store to *guess*
    WHILE *guess* is not valid (from 0 to 6)
        say "Please enter a number between 0 and 6!" --> store to *guess*
    End WHILE (guess is valid)
    Count totalGuess + 1
    say "Nice try!"
    IF *guess* === *theShipLocation*
            *hit* = *hit* + 1
            say "You hit the ship!"
            IF *hit* = 3
                Set *isSunk* is true
                say "The ship is sunk!"
            End IF
        End IF
    End ELSE
End WHILE
Announce the *totalGuess*
say "You hit the ship with a number of guesses: *totalGuess*."
### END GAME
=================================


             

