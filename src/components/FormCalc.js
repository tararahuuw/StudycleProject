import React, {useState} from 'react'
import "./FormCalc.css"

const FormCalc = () => {
    // UseState of FormCalc
    const [input1, setInput1] = useState('')
    const [data, setData] = useState(false)
    const [show, setShow] = useState(false)
    const [median , setMedian] = useState('')
    const [average , setAverage] = useState('')
    const [multiply, setMultiply] = useState('')

    // Method for prevent reloading page
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // Method for parsing text to integer
    function ChangeFormToInt(num) {
        return parseInt(num);
    }

    // Method for cleaning data form from comma and spacing
    function CleanDataForm(text) {
        let spliting = text.replace(/\s/g, '');
        let spliting2 = spliting.split(",");
        let spliting3 = spliting2.map(ChangeFormToInt)
        return spliting3
    }

    // Creating the bubbleSort function
    function bubbleSort(arr){
     
        for(var i = 0; i < arr.length; i++){ 
            // Last i elements are already in place  
            for(var j = 0; j < ( arr.length - i -1 ); j++){
                
                // Checking if the item at present iteration 
                // is greater than the next iteration
                if(arr[j] > arr[j+1]){
                    
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                }
            }
        }
        return arr;
    }

    // Method for displaying result of median array
    function medianArr(arr){
        if(arr.length ===0){
            return 0;
        }
        arr = bubbleSort(arr);
  
        var half = Math.floor(arr.length / 2);
  
        if (arr.length % 2){
            return arr[half];
        }
  
        return (arr[half - 1] + arr[half]) / 2.0;
    }

    // Method for displaying result of average array
    function mean(arr) {
        var sum = 0;
        for(var i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
        return (sum/arr.length).toFixed(2)
    }

    // Method for displaying result of multiply array
    function perkalian (arr) {
        var sum = 1
        for(var i = 0; i < arr.length; i++) {
            sum = sum * arr[i]
        }
        return sum
    }

    // Method for displaying result of Array
    function display () {
        var data1 = CleanDataForm(input1)
        if (data1.length-1 <= 0) {
            setData(e => false)
        }
        else {
            setData(e => true)
            setMedian(e => medianArr(data1))
            setAverage(e => mean(data1))
            setMultiply(e => perkalian(data1))
            setShow (x => true)
            console.log(bubbleSort(data1))
        }
    }

    //Returning the html tag
    return (
        <div className = "container">
           <h1 className = "judul">Studycle Project</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Masukkan Array :  </label>
                    <input
                        type ="text"
                        value = {input1}
                        placeholder = "a1, a2, a3"
                        required
                        onChange = {(e) => setInput1(e.target.value)}
                    />
                </div>
                
                <button className = "button1" type = "submit" onClick = {display}>Calculate</button>
            </form>
            
            <div id="myDIV">
                {(show && data)?
                <div>
                    <hr />
                    <h1 className = "hasil1">Average : {average}</h1>
                    <h1 className = "hasil1">Median : {median}</h1>
                    <h1 className = "hasil1">Multiply : {multiply}</h1>
                </div> : null}
            </div>
        </div>
        
        
    )
}
export default FormCalc