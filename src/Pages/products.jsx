import { Fragment, useEffect, useState, useContext } from 'react';
import CardProducts from '../components/Fragments/CardPorducts';
import { getProducts } from '../services/product.services';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/navbar';
import { DarkMode } from '../context/DarkMode';

const ProductsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && 'bg-slate-900'}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={products.id}>
                <CardProducts.Header image={product.image} id={product.id} />
                <CardProducts.Body name={product.title}>
                  {' '}
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer price={product.price} id={product.id} />
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
