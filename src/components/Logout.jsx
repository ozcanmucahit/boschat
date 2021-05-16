import { Component } from "react";



class LOGOUT extends Component {
    constructor(props){
            super(props);
            this.lgout= this.lgout.bind(this)
    }
    lgout(){
      localStorage.clear();
        window.location.reload();
    }

    render(){
    return (   
        
        <div>

      <button type="button"
       onClick={this.lgout}
    style={{display:'flex', position: 'fixed',borderRadius:'360px'}}
    class="btn btn-outline-primary    ml-1 mt-1   mb-6"
        
        >Çıkış yap</button>

            </div>

        )
    }
}
export default LOGOUT;

              
            


