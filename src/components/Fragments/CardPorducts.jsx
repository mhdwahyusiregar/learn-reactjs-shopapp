import { Link } from 'react-router-dom';
import Button from '../Elements/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-slate-700 border border-gray-700 rounded-lg shadow flex flex-col justify-between mx-3 my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="products"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

// code body awal
// const Body = (props) => {
//   const { children, name } = props;
//   return (
//     <div className="px-5 pb-5 h-full">
//       <a href="">
//         <h5 className="text-xl font-semibold tracking-tight text-white">
//           {name.substring(0, 20)} ...
//         </h5>
//         <p className="text-m text-white">{children.substring(0, 100)}...</p>
//       </a>
//     </div>
//   );
// };

const Body = (props) => {
  const { children, name } = props;
  const trimmedName = name.substring(0, 20);

  // Convert children to text if it's a string or an array of strings
  let childrenText = children;
  if (typeof children === 'string') {
    childrenText = children;
  } else if (Array.isArray(children)) {
    childrenText = children.join(' ');
  }

  const trimmedChildren = childrenText.substring(0, 100);

  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {trimmedName}
        </h5>
        <p className="text-sm text-white">{trimmedChildren}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        $ {''}
        {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}
      </span>
      <Button
        className="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      ></Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
