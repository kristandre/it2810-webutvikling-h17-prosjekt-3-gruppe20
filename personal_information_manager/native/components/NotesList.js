import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';

class NotesList extends Component {
  constructor(props){
    super(props);

    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
    
  }

  handleNewNote(e) {
    this.props.onClick();
  }

  handleEditNote(e) {
    this.props.onEdit(note);
  }

  limitTest(text) {
    if (text.length > 35){
      return text.substring(0,35) + '...'
    } else {
      return text;
    }
  }

  render() {
    const styles = {
      notes: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      note: {
        flex: 0,
        width: 120,
        height: 120,
        margin: 20,
        padding: 5,
        backgroundColor: '#343A40',
      }
    }

    const notes = this.props.notes.map(note => 
      <View key={note.id} id={note.id} style={styles.note} onPress={this.handleEditNote}>  
        <Text style={{fontSize: 20, color: '#fff',}}>
          { this.limitTest(note.text) }
        </Text>
      </View>);

    return (
      <View>
        <View>
            <Button title="+ New" onPress={this.handleNewNote}/>
        </View>
    
        <View flexDirection='row' flexWrap='wrap' style={styles.notes}>
            { notes }
        </View>
      </View>
    );
  }
}

export default NotesList;