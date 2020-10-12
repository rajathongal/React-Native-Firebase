import React from 'react';
import firebase from '../../fb'
import { List} from 'react-native-paper';
import Swipeout from 'react-native-swipeout'

function Todo({doc}) {
      const swipeSettings={
        autoClose:true,
      
        right:[
          {
            onPress: () => {
              deleted(doc.key)
            },
            text: 'Delete', type: 'delete'
          }
        ],

      };

      async function toggleComplete() {
        await firebase.database().ref('todos/').child(doc.key).update ({complete: !doc.val().complete})
        console.log(doc.key)
      }

      function deleted(key){
        firebase.database().ref(`todos/${key}`).remove()
      }

  return (
    <Swipeout {...swipeSettings} > 
          <List.Item
                title={doc.val().title}
                description={doc.val().description}
                onPress={() => toggleComplete() }
                style={{
                  flex:1,
                }} 
                left={props => (
                  <List.Icon {...props} icon={doc.val().complete ? 'check' : 'cancel'} />
                    )}
          />
    </Swipeout> 
    
  );
}

export default React.memo(Todo);