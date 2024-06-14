import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from './redux/actions';
class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.fetchData}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>
          {this.props.todoList.map(item => item.title)}
        </Text>

        {/* <FlatList
          data={this.props.todoList}
          renderItem={({item}) => <Text>item.</Text>}
          style={styles.paddingFlatlist}
        /> */}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  todoList: state.todos,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ff1',
    fontSize: 16,
  },
});
