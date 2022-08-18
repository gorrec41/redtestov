export type optionItemType={
    valueColor:string,
    textColor:string
}
export const optionItem:Array<optionItemType>=[
    {valueColor:'black',textColor:'black'},
    {valueColor:'white',textColor:'white'},
    {valueColor:'blue',textColor:'blue'},
    {valueColor:'yellow',textColor:'yellow'},
]

// function SelectColorItems(optionItem:optionItemType){
//     return(
//         <option  value='black'>hhh</option>
//     )
   
// }

function ColorSelect(){

   
    return(
        <>
        <select className='inputcolor' id="selcolor" defaultValue={'black'} >
                <option  value='black'>black</option>
                <option  value='white'>white</option>
                <option  value='blue'>blue</option>
                <option  value='yellow'>yellow</option>
        </select>
        <p className='colortext'>black</p>  
    </>
    )

}
export default ColorSelect;