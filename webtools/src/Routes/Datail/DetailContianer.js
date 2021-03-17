import { moviesApi, tvApi } from "../../api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props){
    super(props);
  const {location : {pathname}}=props;
  this.state = {
    result: null, //show를 찾을 때 id를 갖고 가잖아 그 작업들ㅇ ㅣ끝나면 id를 가져와서 그걸로검색해서 결과(result)를 가져온다
    error: null,
    loading: true,
    isMovie: pathname.includes("/movie/")
    //이때 props는 이게 {pathname}가 이니라 이건{pathname}이 존재하지 않는다 
    //왜냐하면 super(props) 이건 생성자 클래스 이다.
    //props에서 온 default state를 가지고 클래스를 생성이 끝낫다

  };



  }

  //숫자가 아니기때문 home으로 push 된다
  async componentDidMount(){
    const {math:
      {params:
        {id}
      },
      history :{push},
     
      } =this.props;
        const {isMovie}=this.state;
      const parsedId= parseInt(id);

      //parsedld가 number가 아니면 prop에서 가져온다
      if(isNaN(parsedId) ){

         //함수종료
       return  push("/");
      }

      //뭐가 발생하든 the.setState loading은 false 고 let result로 선언 result가 뭐가 됐든 (TV든 movie든)덮어쓰게 된다
      let result = null;
      try{
        if(isMovie){//여기서 results 를 덮어쓰기 
          ({ data: result } = await moviesApi.movieDetail(parsedId));
          
        /* request=await moviesApi.movieDetail(parsedId);
          result=request.data;*/
        }else{
          ({data :{result}}=await tvApi.showDetail(parsedId));
         
        }

      }catch{
         this.setState({error:"can't find anything" })
      }finally{
        this.setState({loading: false,result});
      }
 
  }


  

  render() {
    console.log(this.props)
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}