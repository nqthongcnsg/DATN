import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const UpdateCategories=({data,handleChange, handleSubmit})=>{

     const [success, setSuccess]= useState({show: false, state: null, message: ""});
     const [searchTerm, setSearchTerm] = useState(0);
     const [Categories, setCategories]= useState();
     var id=useParams();
     useEffect(()=>{
         API.getCategoriesId(id.id).then((res)=>{
             setCategories(res.data.result);
         })
     },[searchTerm]);
        
  

    const onClick=()=>{
      
         let name=document.getElementById('name').value;
     console.log(Categories[0])
       
       
       
        const data={id:Categories[0].idCategories,name:name}
       
    
      
        
   
        let dem=0;
      
       if(dem==0){
        API.updateCategories(data).then((res)=>{
            alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
            window.location="/categories";
           
        })    
       }
      
    
    

    }
    
    if(Categories){
        return(<>
            <div class="main-panel">        
                <div class="content-wrapper">
              <div className="row">
                    <div className="col-md-8 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Cập nhật thể loại</h4>
                          
                          <form className="forms-sample" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label for="exampleInputUsername1">Tên thể loại</label>
                              <input type="text" className="form-control" id="name" placeholder={Categories[0].nameCategories} name="name"/>
                            </div>
                           
                           
                         
                            {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                            <div className="btn btn-primary" onClick={onClick}>Cập nhật</div>
                            <button className="btn btn-light"><a href="/categories" >Quay Lại</a></button>
                          </form>
                        </div>
                      </div>
                    </div>
                 
               
                  </div>
                  </div>
                  </div>
            </>)
    }
}
export default UpdateCategories;