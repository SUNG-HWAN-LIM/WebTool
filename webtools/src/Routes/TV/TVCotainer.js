//컨테이너 컴포넌트
//API 추가전에 method도 없는 dumb
import React  from 'react';
import TVPresenter from "./TVPresenter";


//홈컨테이너는 상태 값을 가진다
export default class extends React.Component{
//상태 값은 3가지
state = {
  //state들을 결정했다
     popular: null,
airingToday: null,
toRated: null,
loading:true,
error:null
};
// 이곳에 모든 로직을 추가 (api 가져오고  eroor 처리하는 모든것들)

//여기 HomePresenter로 가는 모든 스테이트 값을 렌더링
render(){
  //object destructuring(객체 비구조 할당 )사용
 const {popular,airingToday, toRated,loading,error}=this.state;
  return <TVPresenter
        toRated ={toRated}
        popular={popular}
         airingToday={airingToday}
       loading={loading}
       error={error}
  />

}

}

