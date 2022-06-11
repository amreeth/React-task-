import React, { useEffect, useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

let data = [];
let res;
function Add() {
  const [count, setCount] = useState();
  const [val, setVal] = useState([]);
  const [code, setCode] = useState([]);
  const [name, setName] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const dispatch = useDispatch()
  const [forms,setForms] = useState([])

  const {allProducts} = useSelector((state)=>state)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setVal(Array.from({ length: count }, (item, index) => index));
    
  // };


  const handleSubmit = (e) => {
    e.preventDefault()
    let newform = {
      code:"",
      name:"",
      qty:""
    }
    if(forms.length<count){
      let c=(count-forms.length)
      for(let i=0;i<c;i++){
        setForms((prev)=>([...prev,newform]))
      }
    }else{
    
      forms.length=count
      setForms(([...forms]))
    }
    
  }

  const handleSave = (e)=>{
    forms.map((val,i)=>{
      allProducts.map((product,j)=>{
        if(product?.code===val?.code){
          allProducts[j].qty += forms[i]?.qty
        }else{
          allProducts.push(val)
        }
      })
    })
    dispatch({
      type:'ADD_PRODUCTS'
    })
  }


  useEffect(()=>{
    console.log(allProducts);
  },[allProducts])

  const addProduct = (e) => {
    e.preventDefault();
    console.log(code);
    console.log(name);
    console.log(quantity);
    for(let i=0;i<code.length;i++){
      if(code[i]==code[i+1]){

      }
    }


  };

  useEffect(()=>{
    console.log(forms);
  },[forms])

  return (
    <Container>
      <Row className="my-4">
        <Col className="border shadow text-center py-2 rounded" lg={3} sm={3}>
          <form action="" onSubmit={handleSubmit}>
            <input type="number" onChange={(e) => setCount(e.target.value)} />
            <button
              className="mx-auto border-0 px-2 py-1 my-4 bg-info"
              type="submit"
            >
              submit
            </button>
          </form>
        </Col>

        <Col className="border shadow mx-3 rounded" lg={8} sm={8}>
          <Form >
            <Row>
              {forms &&
                forms.map((val,i) => (
                  <Col lg={4} className="m-3 border">
                    <Form.Group className="mb-3">
                      <Form.Label>product Code</Form.Label>
                      <Form.Control
                        type="text"

                        placeholder="Enter product code"
                        onBlur={(e) => {
    
                          setForms((prev)=>([
                            ...forms.map((form,j)=>{
                              if(j==i){
                                return {...form,code:e.target.value}
                              }
                              return form
                            })
                          ]))
                          
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        onBlur={(e) => {
                          setForms((prev)=>([
                            ...forms.map((form,j)=>{
                              if(j==i){
                                return {...form,name:e.target.value}
                              }
                              return form
                            })
                          ]))
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="Number"
                        placeholder="Enter quantity"
                        onBlur={(e) => {
                          setForms((prev)=>([
                            ...forms.map((form,j)=>{
                              if(j==i){
                                return {...form,qty:e.target.value}
                              }
                              return form
                            })
                          ]))
                        }}
                      />
                    </Form.Group>
                  </Col>
                ))}
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Add;
