  // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs

  'use strict';  
  const functions = require('firebase-functions');
  const {WebhookClient} = require('dialogflow-fulfillment');
  const {Card, Suggestion} = require('dialogflow-fulfillment');
  const {Payload} = require('dialogflow-fulfillment'); 
  process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
   
  exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));    
   
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
                webview_height_ratio: "full",
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
                subtitle:"Crea tu cita de forma sencilla",/*,
                default_action: {
                  type: "web_url",
                  url: "https://eddyarellanes.github.io/calendar/",
                  messenger_extensions: true,
                  webview_height_ratio: "full",
                }*/
                buttons:[
                  {
                    type:"web_url",
                    url:"https://eddyarellanes.github.io/calendar",
                    webview_height_ratio: "full",
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
              },
            ]
          }
        }
      };
        
      agent.add( new Payload(agent.FACEBOOK, genericTemplate ));
    }
    function maps(agent){
      console.log("Agente de Dialog Flow bebe")
      console.log(agent)      
      agent.add(`Prueba test`);      
      //let mapsURls = [
        //Comprobar si es navegador o APP :C
      //]
      
    }

 
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
    intentMap.set('Default Welcome Intent', maps);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('RequestDate', requestDate);
    intentMap.set('RequestLocation - custom', maps);
    
    // intentMap.set('your intent name here', yourFunctionHandler);

    agent.handleRequest(intentMap);
  });
