const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>Product: {id}</div>;
};

export default Product;
