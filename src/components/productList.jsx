import styles from "./productList.module.css";

export function  productList(){
var category = "smartphone";
var limit = 10;
var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,brand,title,price,description`;
const[products,setProducts] = useState([]);

}

return (
<div className={styles.conteiner}>
<h1>TJA megastore</h1>

</div>

)