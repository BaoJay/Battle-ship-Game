## Battle ship Game: Guess a number to hit the ship, until it sinks.
#### Goal: Take the best guesses to sink their ship!

=================================
### START GAME
Declare *theShipLocation* variable
    location1 = 3
    location2 = 4
    location3 = 5
Declare *guess* (which is store the user's input)
Declare *hit* (value is increase when the guess is matched the ship location)
Declare *isSunk* (boolean value, to check if the hit equals to 3)

Random *theShipLocation*
WHILE *isSunk* is false (The ship hasn't sunk yet)
    Guess a number (again) --> store to *guess*
    IF *guess* is valid (from 0 to 5)
        IF *guess* === *theShipLocation*
            *hit* = *hit* + 1
            IF *hit* = 3
                Set *isSunk* is true (The ship is sunk!)
            End IF
        End IF
    End IF
End WHILE
Announce the total *guess*
### END GAME
=================================


             

