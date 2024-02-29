//Create new product => /api/v1/products
export const getProducts = async (req, res) =>{
  res.status(200).json({
    message:'All prducts',
  })
}
