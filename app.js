var h_score = 0

var c_score = 0

do{

    alert("Welcome to twenty. In this game, you will be up against the computer to see if you can get your total closer to twenty. If you go over 20, you lose. The same goes for the computer, as if it goes over 20, it loses. If you both are over 20, then whoever is closer to 20 wins. If you both get the same number, you tie. Now then, let us start the game")

    alert("It is now the Computer's turn")

    c_total = 0

    do{

        c_num = Math.floor(Math.random() * 10) + 1

        c_total = c_num + c_total

        alert(`The computer drew ${c_num}. It's total is ${c_total}.`)

    } while (c_total < 16)

    alert("It is now your turn")

    h_num = Math.floor(Math.random() * 10) + 1

    h_total = 0 + h_num

    alert(`You drew ${h_num}. Your total is ${h_total}`)

    do{

        h_num = Math.floor(Math.random() * 10) + 1

        var h_choice = prompt("Do you wish to draw again? 'y' for yes, 'n' for no.")

        if (h_choice == "y"){

            h_total = h_total + h_num

            alert(`You drew ${h_num}. Your total is ${h_total}`)

        } else if (h_choice == "n"){
            
            break

        } else {

            alert("I said put in 'y' or 'n'. Next time, DO WHAT YOU ARE TOLD!")

        }

    } while (h_total < 20)

    if ((h_total != 20) && (c_total != 20)){

        if ((h_total < 20) && (c_total < 20)){

            if (h_total > c_total){

                alert(`You got ${h_total}. The computer got ${c_total}. Because you didn't go over 20 and your number was greater than the computer, you win!`)

                h_score++

            } else if (h_total < c_total){

                alert(`You got ${h_total}. The computer got ${c_total}. Because you didn't go over 20 but your number was less than the computer, the computer wins!`)

                c_score++

            }

        } else if ((h_total < 20) && (c_total > 20)){

            alert(`You got ${h_total}. The computer got ${c_total}. The computer went over 20, so, by default, you win!`)

            h_score++

        } else if ((h_total > 20) && (c_total < 20)){

            alert(`You got ${h_total}. The computer got ${c_total}. you went over 20, so, by default, the computer wins!`)

            c_score++

        } else if ((h_total > 20) && (c_total < 20)){

            if (h_total > c_total){

                alert(`You got ${h_total}. The computer got ${c_total}. Because you both went over 20 and your number was greater than the computer, the computer wins!`)

                c_score++

            } else if (h_total < c_total){

                alert(`You got ${h_total}. The computer got ${c_total}. Because you both went over 20 and your number was less than the computer, you win!`)

                h_score++

            }

        }

    } else if ((h_total == 20) && (c_total != 20)){

        alert (`You got twenty and the computer didn't! You win!`)

        h_score++

    } else if ((h_total != 20) && (c_total == 20)){

        alert (`The computer got twenty and you didn't! The computer wins!`)

        c_score++

    } else if ((h_total == 20) && (c_total == 20)){

        alert (`You and the computer got twenty! It's a tie!`)

    }

    alert(`You won ${h_score} rounds. The computer has won ${c_score} rounds.`)

    var again = prompt("Would you like to play again? 'y' for yes, 'n' for no.")

} while ((again != "n") || (again == "y"))

alert("Thank you for playing Twenty!")