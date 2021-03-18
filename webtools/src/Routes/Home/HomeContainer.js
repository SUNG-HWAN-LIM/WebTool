//컨테이너 컴포넌트
//API 추가전에 method도 없는 dumb
import { moviesApi } from "api";
import React  from 'react';
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

async componentDidMount(){  //자바스크립트는 componentDidMount를 실행하고 
  //nowPlaying 무비를 가져오는걸 시작한다 근데 API가 리턴 될때 까지 기다리지 않는다
//자바스크립트는 moviesApi.nowPlaying() 이걸 실행하고 그 다음을 계속해서 실행한다.(API response를 기다리지 않는다)


  //1.전체 API 요청을 여기서 할 수 있다.

  //try를 실행하고 뭔가 작동하지 않으면 error를 catch한다
  try{
    //async,await는 자바스크립트 한테, 거기~ 나 좀 기다려:라고 말하는거다
   const {data: {results:nowPlaying}} = await moviesApi.nowPlaying(); 
      
   const {data: { results: upcoming }} =await moviesApi.upcoming();

   const {data : {results : popular}}= await moviesApi.popular();


    this.setState({
      nowPlaying ,
      upcoming,
      popular

    });
 
  }catch{
    this.setState({
      error :"can't find movies information"
    });
    
  } finally {
    this.setState({
      loading: false
    });
  }

}

// 각각의 요청을 분리된 함수로 만들어서 따로 요청 할 수 있다.




//여기 HomePresenter로 가는 모든 스테이트 값을 렌더링
render(){
  //object destructuring(객체 비구조 할당 )사용
 const {nowPlaying, upcoming,popular ,error,loading  }=this.state;

  return <HomePresenter
   nowPlaying={nowPlaying} 
   upcoming={upcoming} 
   popular={popular}
   error={error}
   loading={loading}
  />
}

}

