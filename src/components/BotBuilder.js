import React, { Component } from 'react'
import Bot from './images/BotBuilder_pagelayout.png'

export class BotBuilder extends Component {
    render() {
        return (
            <div id="BotBuilder">
                <h1>Bot Builder</h1>
                <p>The Bot Builder is a UI in the MAC (Management Applications Console) which allows a developer to map the intents created in NLP (Natural Language Processor) with the Actions configured in the Interactive Bot Engine. During a Bot conversation (via Facebook™ chat for text and Alexa™ / Google Home™ for voice), the bot engine communicates with the applicable NLP to determine which intent to use per utterance, and decides the action to take for an intent (for example, run an interactive workflow or redirect to a webhook application based on the intent selected).</p>
                <h3>Bot:</h3>
                <p>A Bot is a computer program that provides a seemingly natural conversation with humans. A “chatbot” automates conversational responses to questions to help a customer quickly accomplish a task or solve a problem. Bots are programmed to act like humans when you talk to them, so that it feels like asking a person for help instead of just typing in a search engine.</p>
                <p>The diagram below, and subsequent sections, include descriptions of the layout of the Bot Builder.</p>
                <img src={Bot}/>
                <p>The tabs in the Bot Builder are available based on the access privileges of the logged-in user.</p>
                <ul>
                <li>Navigation drawer
                <ul>
                <li>Use Cases</li>
                <li>Actions</li>
                <li>Interactive Bot Testing</li>
                <li>Configuration</li>
                <li>About</li>
                <li>Help</li>
                <li>Start Tour</li>
                </ul>
                </li>
                <li>Repositories
                <ul>
                <li>Use Case Repository</li>
                <li>Action Repository</li>
                </ul>
                </li>
                <li>Repository toolbar</li>
                <li>Overlay panel
                <ul>
                <li>Add/Edit Use Case</li>
                <li>Add/Edit Action</li>
                <li>Interactive Bot Testing</li>
                </ul>
                </li>
                <li>Status bar</li>
                </ul>

            </div>
        )
    }
}

export default BotBuilder
