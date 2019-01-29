  // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
  // for Dialogflow fulfillment library docs, samples, and to report issues
  'use strict';
  //const fetch = require('node-fetch');
  const functions = require('firebase-functions');
  const {WebhookClient} = require('dialogflow-fulfillment');
  const {Card, Suggestion} = require('dialogflow-fulfillment');
  const {Payload} = require('dialogflow-fulfillment'); 
  process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
   
  exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    //console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    //console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
    //console.log("Payload 7___7");
    //console.log(JSON.stringify(agent.originalRequest.payload.data.sender.id));
   
    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }
   
    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }
    function requestDate(agent){      
      const buttonTemplate =  
      {           
        attachment: {
          type: "template",
          payload: {
            template_type: "button",
            text: "Agendar Cita",  
            image_url: "https://www.en-dependencia.com/wp-content/uploads/2017/05/Cita-medica.jpg",
            buttons: [
              {
                type: "web_url",
                url: `https://eddyarellanes.github.io/calendar?name=Usuario`,                      
                webview_height_ratio: "compact",
                messenger_extensions: true,
                title: "Agendar"                
              }
            ]
          }
        }
      };

      const genericTemplate =
      {
        attachment: {
          type: "template",
          payload: {
            template_type:"generic",
            elements:[
              {
                title:"Agendar Cita",
                image_url: "https://www.en-dependencia.com/wp-content/uploads/2017/05/Cita-medica.jpg",
                subtitle:"Crea tu cita de forma sencilla"/*,
                default_action: {
                  type: "web_url",
                  url: "https://eddyarellanes.github.io/calendar/",
                  messenger_extensions: true,
                  webview_height_ratio: "compact",
                }*/,
                buttons:[
                  {
                    type:"web_url",
                    url:"https://eddyarellanes.github.io/calendar/",
                    webview_height_ratio: "compact",
                    messenger_extensions: true,
                    title:"Agendar"                                      
                  }
                  /*Postback Example
                  {
                    type:"postback",
                    title:"Start Chatting",
                    payload:"DEVELOPER_DEFINED_PAYLOAD"
                  }  
                  */
                ]      
              },//More Json Cards :D
              //...{}...{}
            ]
          }
        }
      };
      /*FETCH not works very well in DialogFlow Fullfilment
      fetch(`https://graph.facebook.com/${agent.originalRequest.payload.data.sender.id}?fields=first_name,last_name&access_token=EAAh7lHaL7ZC8BAKIOi2fgzs9Rkw0DqJsUIhUtZAqXDZBxcJU3jZC4ntAjLwhirTmveeM22lrArfohLbmFgk0UDXiJsNTjW5ZCxugTGkZBpaPfryPUZArbLazaQUkYUbX5aSoB7fLNBmrPB1ZCmwpuNtNjnMSZCpeVjRyzKwEoiZCQgQAZDZD`, {
          method: 'GET',        
          headers: {
            'Content-Type': 'application/json; charset=utf-8',                   
          }
        })            
      .then(res => res.json())     
      .then(data => {
        console.log("Data USER");
        console.log(data);
        buttonTemplate.attachment.payload.buttons[0].url = `https://eddyarellanes.github.io/calendar/${data.first_name}`;
        agent.add( new Payload(agent.FACEBOOK, buttonTemplate ));
      })
      .catch(err => {
        //agent.add("This is a Free Demo, And Network Request are Restricted");
        agent.add( new Payload(agent.FACEBOOK, buttonTemplate ));
      });
      */   
      agent.add( new Payload(agent.FACEBOOK, buttonTemplate ));
    }


    // // Uncomment and edit to make your own intent handler
    // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
    // // below to get this function to be run when a Dialogflow intent is matched
    // function yourFunctionHandler(agent) {
    //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
    //   agent.add(new Card({
    //       title: `Title: this is a card title`,
    //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
    //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
    //       buttonText: 'This is a button',
    //       buttonUrl: 'https://assistant.google.com/'
    //     })
    //   );
   
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('RequestDate', requestDate);
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
  });
