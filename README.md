# battleship

[Live Demo](https://ashish-krishna-k.github.io/battleship/)

A project to create the Battleship game using TDD principles during development as part of [The Odin Project's]() JavaScript course.

*This project was initially completed in my first run of The Odin Project and can be viewed in the "old" branch [here](). During my second run I am reworking past projects and this time I have chose to use TypeScript as a practice.*

## The UI
The user will first be prompted to place their ships in their board once completed the player will be presented with the start game button, once clicked the user's playerBoard and the enemy's board will be presented to the user. The user will have to attack the enemy's board by clicking on the tiles in the enemy board. If the user's attack "miss" the tile will be marked in blue and if the attack hits the ship it will be marked in red. Once all the ships of either of the players is sunk the game ends and the user will be presented with the winner name and play again button.

## The code
The main objective of this project is to practice TDD as such the focus of this project was on writing unit tests. The app logic of **models.ts** and **players.ts** was completely built by using TDD principles to track progress. Unfortunately, I was not able to figure out how to test domManipulation logic as such the **displayController.ts** does not have any unit tests, all functions in this module was completed without applying TDD principles.
The project utilizes the pub/sub pattern(**eventsObserver.ts**) in an attempt to decouple various modules from each other.

## Future plans
- Improving test coverage to even include the **displayController.ts**
- Adding a backend to facilitate online multiplayer against a real plaver v/s the AI player in it's current version.
