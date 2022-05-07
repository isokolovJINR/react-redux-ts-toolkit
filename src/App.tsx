import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/action-creators/User";
import PostContainer from "./components/PostContainer";

function App() {
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //
    // dispatch(fetchUsers())
    //
    // },[])


  return (
    <div className="App">
        <PostContainer/>
        {/*{isLoading && <h1> LOADING</h1>}*/}
        {/*{error && <h1> {error}</h1>}*/}
        {/*{JSON.stringify(users, null, 2)}*/}
    </div>
  );
}

export default App;
