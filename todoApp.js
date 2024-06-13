import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {addTodo, checked, dltTodo} from './redux/actions';

class SourceCode extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }
  card = item => {
    return (
      <View style={styles.card}>
        <CheckBox
          value={item.flag}
          onValueChange={() => this.props.checked(item.id)}
          style={styles.checkbox}
        />

        <Text style={[styles.cardText, item.flag && styles.strikeText]}>
          {item.todo}
        </Text>

        <TouchableOpacity onPress={() => this.props.dltTodo(item.id)}>
          <Icon name="delete" size={25} color="#900" style={{padding: 10}} />
        </TouchableOpacity>
      </View>
    );
  };

  handleChange = input => {
    this.setState({todo: input});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Todo List:</Text>

        <View style={styles.column}>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange}
            value={this.state.todo}
            placeholder="Enter Todo"
            placeholderTextColor="#095fe8"></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>{ this.props.addTodo(this.state.todo)
              this.setState({todo:''})}
            }>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.props.todoList}
          renderItem={({item}) => this.card(item)}
          style={styles.paddingFlatlist}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  todoList: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  dltTodo,
  checked,
};

export default connect(mapStateToProps, mapDispatchToProps)(SourceCode);

const styles = StyleSheet.create({
  paddingFlatlist: {padding: 0, paddingTop: 20},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  heading: {
    color: 'black',
    elevation: 15,

    padding: 15,
    fontStyle: 'italic',
    fontSize: 20,
    backgroundColor: '#f2dac2',
    borderRadius: 13,
    margin: 15,
    borderColor: 'gray',
  },
  column: {
    padding: 10,
    marginBottom: 9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    color: 'black',
    elevation: 15,

    padding: 10,
    width: 200,
    borderRadius: 13,
    borderColor: 'gray',
    marginRight: 20,
    backgroundColor: '#ede695',
  },
  button: {
    elevation: 9,

    padding: 12,
    backgroundColor: '#e68388',
    borderRadius: 13,
    borderColor: 'black',
    shadowColor: 'gray',
  },
  buttonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
  },
  cardText: {
    color: 'black',

    fontWeight: '400',
    fontSize: 15,
    marginTop: 8,
  },
  card: {
    elevation: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    margin: 5,
    borderRadius: 13,
    borderColor: 'gray',
    backgroundColor: '#c7e3ed',
    width: 267,
  },
  checkbox: {
    marginRight: 10,
    marginTop: 6,
  },
  dltbutton: {
    padding: 3.5,
    backgroundColor: '#c4d3f5',
    borderRadius: 8,
    borderColor: 'black',
    shadowColor: 'gray',
  },
  dltbuttonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 13,
  },
  subHeading: {
    fontWeight: '500',
    marginBottom: 7,
    color: '#FF6347',
  },
  strikeText: {
    color: 'black',

    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
