//컨테이너 컴포넌트

import React  from 'react';
import HomeContainer from '.';
import HomePresenter from "./HomePresenter";


//홈컨테이너는 상태 값을 가진다
export default class extends React.Component{
//상태 값은 3가지
state = {
  //state들을 결정했다
  nowPlaying: null,
  upcoming: null,
  popular: null,
  error:null,
  loading: true
};
// 이곳에 모든 로직을 추가 (api 가져오고  eroor 처리하는 모든것들)

//여기 HomePresenter로 가는 모든 스테이트 값을 렌더링
render(){
  //object destructuring(객체 비구조 할당 )사용
 const {nowPlaying, upcoming,popular ,error,loading  }=this.state;
  return <HomeContainer
   nowPlaying={nowPlaying} 
   upcoming={upcoming} 
   popular={popular}
   error={error}
   loading={loading}
  />
}

}

