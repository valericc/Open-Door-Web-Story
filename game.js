const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}



function startGame() {
  state = {}
  showTextNode(.5)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: .5,
        text: 'An Open Door. \n Created By Zander Marshall',
        options: [
            {
                text: 'Begin.',
                nextText: 1
                
            }
        ]
    },
    {
        id: 1,
        text: 'You catch a glimpse of a mysterious house youve never noticed on your daily walk. A loud sound occurs from the house, yet no one seems to be home.  You feel as if you should check it out.',
        options: [
            {
                text: 'Approach the house.',
                nextText : 1.1
            },
            {
                text: 'Keep walking and head home.',
                nextText: 404
            }
        ]
    },
    {
        id: 1.1,
        text: 'The door is cracked open, with nothing but darkness behind it. Its midday, yet it looks like you are staring into an abyss. There is a flashlight beside the door.',
        options: [
            {
                text: 'Take the flashlight and enter the house',
                setState: {takeLight: true },
                nextText: 2
            },
            {
                text: 'Forget the flashlight and enter the house.',
                setState: {takeLight: false},
                nextText: 3
            },
            {
                text: 'Look around and check the back yard.',
                nextText: 4
            },
            {
                text: 'Go on with your day and return home.',
                nextText: 404 
                
            }
        ]
        
    
    },
    {
        id:1.5,
        text: 'The front door is cracked, and no one is home. Being a good samaritan, you decide to investigate for trouble. There is a flashlight beside the door.',
        options: [
            {
                text: 'Take the flashlight and enter the house',
                setState: {takeLight: true },
                nextText: 2
            },
            {
                text: 'Forget the flashlight and enter the house.',
                setState: {takeLight: false},
                nextText: 3
            },
            {
                text: 'Look around and check the back yard.',
                nextText: 4
            },
            {
                text: 'Go on with your day and return home.',
                nextText: 404
                
            }
        ]
    },
    {
        id:2,
        text: 'It seems abandonded. The house is falling apart. There isnt much to do other than take a look around. You see two hallways, one to the left and right.',
        options: [
            {
                text: 'Check out the right hallway.',
                nextText: 5
            },
            {
                text: 'Check out the left hallway.',
                nextText: 6
            },
            {
                text: 'Go home.',
                nextText: 404
            }
           

        ]
        
    },
    {
        id:2.1,
        text: 'You see two hallways, one to the left and right.',
        options: [
            {
                text: 'Check out the right hallway.',
                nextText: 23
            },
            {
                text: 'Check out the left hallway.',
                nextText: 6
            },
            {
                text: 'Go home.',
                nextText: 404
            }
           

        ]
        
    },
    {
        id:3,
        text: 'You cant see a thing. Its dark, yet you catch a glimpse of a shimmering light far away infront of you.',
        options: [
            {
                text: 'Investigate the light.',
                nextText: 20
            },
            {
                text: 'Get out of the house',
                nextText: 1.5
            }
        ] 
    },
    {
        id:4,
        text: 'You climb the fence and are faced with a overgrown back yard. The house is abandoned. The back door is locked.',
        options: [
            {
                text: 'Return to the front of the house',
                nextText: 1.5
            },
            {
                text: 'Go home.',
                nextText: 404
            }

        ]
    },
    {
        id:404,
        text: 'You return to your route and walk home. You have an odd feeling about the house, as if something is telling you that you are wrong for leaving.',
        options: [
            {
                text: 'Restart Game?',
                nextText: .5
            }
           
        ]
        
    },
    {
        id: 666,
        text: 'You feel a sharp pain in your chest. Youre breath begins to slow as you feel blood run down your body. \n You have perished.',
        options: [
            {
            text: 'Restart Game?',
            nextText: .5
            }
        ]
    },
    {
        id: 5,
        text: 'Its a narrow hallway with two doors at the end. One door is shut and the other is wide open.',
        options: [
            {
                text: 'Enter the open door on the right',
                nextText: 9
               
            },
            {
                text: 'Enter the closed door on the left',
                nextText: 10
            },
            {  
                text: 'Turn around',
                nextText: 2.1
            }
        ]
    },
    {
        id: 6,
        text: 'You find yourself staring into a dark doorway at the very end of the hallway with a small shimmer of light coming from it.',
        options: [
            {
                text: 'Enter the doorway.',
                nextText: 7
            },
            {
                text: 'Turn around.',
                nextText: 2.1
            }
        ]

    },
    {
        id: 7,
        text: 'As you walk closer,the light becomes brighter. It encloses everything around you, and you close your eyes tight in fear and anticipation.',
        options: [
            {
                text: 'Open your eyes.',
                nextText: 8
            },
            {
                text: 'Turn around and run away.',
                nextText: 666
            }
        ]
    },
    {
        id: 8,
        text: 'You open your eyes to nothing. Darkness. \n Darkness all around you. \n Whispers all around you.\n Its cold.\n What do you do from here?',
        options: [
            {
                text: 'Turn on your flashlight.',
                nextText: 777
            },
            {
                text: 'Scream.',
                nextText: 666
            },
            {
                text: 'Turn around and head for the door.',
                nextText: 666
            }
        ]
    },
    {
        id: 9,
        text: 'You walk through the door and notice a small shimmer of light in the corner of your eye.',
        options: [
            {
                text: 'Investigate the light.',
                nextText: 7
            },
            {
                text: 'Turn around',
                nextText: 5
            }
            
        ]
    },
    {
        id: 10,
        text: 'The door is stuck.',
        options: [
            {
                text: 'Use force.',
                nextText: 13
            },
            {
                text: 'Forget it, go to the open doorway.',
                nextText: 9
            }
        ]
    },
    {
        id: 777,
        text: 'You see an undescribable figure towering over you. You are frozen in place.',
        options: [
            {
                text: 'Run away',
                nextText: 666
            },
            {
                text: 'Throw the flashlight at the figure',
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: 'The figure stumbles backwards.',
        options: [

            {
                text: 'RUN.',
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        text: 'You escape the house. Your heart is racing and you have no clue who to contact. You get home and lock yourself inside.',
        options: [
            {
                text: 'Restart?',
                nextText: .5
            }
        ]
    },
    {
        id: 13,
        text: 'You force the door open and catch a glimpse of subtle light in the room.',
        options: [

            {
                text: 'Approach the light',
                nextText: 7
            },
            {
                text: 'Turn around',
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        text: 'Its a narrow hallway with two doors at the end.',
        options: [
            {
                text: 'Enter the door on the right.',
                nextText: 23

            },
            {   
                text: 'Enter the door on the left.',
                nextText: 16
            },
            {
                text: 'Turn around.',
                nextText: 15
            }

        ]
    },
    {
        id: 15,
        text: 'You see two hallways. One to the left and one to the right.',
        options: [
            {
                text: 'Check out the right hallway.',
                nextText: 14
            },
            {
                text: 'Check out the left hallway.',
                nextText: 17
            },
            {
                text: 'Go home.',
                nextText: 404
            }

        ]
    },
    {
        id: 16,
        text: 'You catch a glimpse of subtle light in the room.',
        options: [
            {
                text: 'Approach the light',
                nextText: 7
            },
            {
                text: 'Turn around',
                nextText: 14
            }
        ]
    },
    {
        id: 17,
        text: 'You find yourself staring into a dark doorway at the very end of the hallway with a small shimmer of light coming from it.',
        options: [
            {
                text: 'Enter the doorway.',
                nextText: 7
            },
            {
                text: 'Turn around.',
                nextText: 15
            }
        ]
    },
    {
        id: 20,
        text: 'As you walk closer,the light becomes brighter. It encloses everything around you, and you close your eyes tight in fear and anticipation.',
        options: [
            {
                text: 'Open your eyes.',
                nextText: 21
            },
            {
                text: 'Turn around and run away.',
                nextText: 666
            }
        ]
    },
    {
        id: 21,
        text: 'You open your eyes to nothing. Darkness. \n Darkness all around you. \n Whispers all around you.\n Its cold.\n What do you do from here?',
        options: [
            
            {
                text: 'Scream.',
                nextText: 666
            },
            {
                text: 'Turn around and head for the door.',
                nextText: 666
            }
        ]
    },
    {
        id: 23,
        text: 'You walk through the door and notice a small shimmer of light in the corner of your eye.',
        options: [
            {
                text: 'Investigate the light.',
                nextText: 7
            },
            {
                text: 'Turn around',
                nextText: 14
            }
            
        ]
    }
   //15

]


startGame() 