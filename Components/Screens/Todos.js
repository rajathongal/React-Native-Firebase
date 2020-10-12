import React ,{ useState, useEffect }from 'react';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firebase from '../../fb';
import { FlatList, } from 'react-native-gesture-handler';
import Todo from './Todo';

function Todos() {
    const [ todo, setTodo ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ todos, setTodos ] = useState([]);
    const db = firebase.database().ref('todos/')

    async function addTodo(){
        await db.push({
            title: todo,
            description: description,
            complete: false,
        });
        setTodo('')
        setDescription('')
    }
        
    useEffect(() => {
        return db.on('value',(snapshot) => {
          const list = [];

          snapshot.forEach(doc => {
            console.log("doc", doc.val())
            list.push({
             doc,
            });
            console.log("list", list)
          });
    
          setTodos(list);
    
         
        });
    }, [] );
       

    return(
        <>
        <Appbar>
            <Appbar.Content title={'TODOs List'}/>
        </Appbar>

        <FlatList 
            style={{flex:1, width:'100%'}}
            data={todos}
            keyExtractor={(item) => item.key} renderItem={({item}) =><Todo {...item}  /> }
            
        />

        <TextInput label={'New TODO'} value={todo} onChangeText={setTodo} />
        <TextInput label={'Description'} value={description} onChangeText={setDescription} />
        <Button onPress={() => addTodo()}> Add TODO </Button>
        
        </>
    )
}

export default Todos;
