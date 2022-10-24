
import React,{ Component} from 'react';
import Container from './Container';
import './App.css';
import {getAllStudent } from './client'
import icon from 'antd';
import {
  Avatar,
  Table,
  Spin,
  

} from 'antd';
 const getIndicatorIcon  = () => <icon type="loading" style={{fontSize :50}} spin/>;


class App extends Component {

  state = {
  Student : [],
  isFetching : false

  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () =>{
    this.setState({
      isFetching: true

    });
    getAllStudent()
    .then(res => res.json()
    .then(Students => {
      console.log(Students)
      this.setState({
        Students,
        isFetching:false
      });
    }));
  }



  render(){
    const { Students,isFetching } = this.state;
    if(isFetching){
      return (
        <Container>
          <Spin Indicator={getIndicatorIcon()} />
        </Container>
      );
    }
    if(Students && Students.length){
      const columns =[
        {
          title: '',
          key: 'avatar',
          render:(text,student) =>(
            <Avatar size='large'>
              {`${student.firstname.charAt(0).toUpperCase()}${student.lastname.charAt(0).toUpperCase()}`}

            </Avatar>
          )
        },
        {
          title: 'StudentId',
          dataIndex : 'studentId',
          key : 'studentId'
        },
        {
          title: 'first Name',
          dataIndex : 'firstname',
          key : 'firstname'
        },
        {
          title: 'last Name',
          dataIndex :'lastname',
          key : 'lastname'
        },
        {
          title: 'Email',
          dataIndex : 'email',
          key : 'email'
        },
        {
          title: 'Gender',
          dataIndex :'gender',
          key : 'gender'
        },
      ];
      return(
        <Container>
        <Table
         dataSource={Students}
          columns={columns} 
          pagination={false}
          rowKey='studentId' />
          </Container>
      );
   
    }

    
    return <h1>NO students found</h1>
  }
}

export default App;




/*
  default logo reacte
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/