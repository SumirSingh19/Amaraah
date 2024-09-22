import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, uploadImage } from "../../redux/productSlice"; // Added uploadImage import
import I1 from "../../assets/images/1.png";
import I2 from "../../assets/images/2.png";
import I3 from "../../assets/images/3.png";
import I4 from "../../assets/images/4.png";
import I5 from "../../assets/images/5.png";

const ProductAdd = () => {
  const dispatch = useDispatch();

  // State for the product form fields
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [karats, setKarats] = useState("");
  const [weight, setWeight] = useState("");
  const [grossWeight, setGrossWeight] = useState("");
  const [diaWeight, setDiaWeight] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [labourCost, setLabourCost] = useState("");
  const [totalStock, setTotalStock] = useState("");
  const [images, setImages] = useState([null, null, null, null, null]);
  const [image, setImage] = useState(null);
  const [sending, setSending] = useState(false);

  // Handle image input
  // const handleImageChange = (e, index) => {
  //   const files = e.target.files;
  //   if (files && files[0]) {
  //     const updatedImages = [...images];
  //     updatedImages[index] = files[0]; // Store the file object instead of the URL
  //     setImages(updatedImages);
  //   }
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle product submission
  const handleSubmit = async () => {
    setSending(true);
    let imageUrl = null;
    if (image) {
      const formData = new FormData();
      formData.append("my_file", image);
      const result = await dispatch(uploadImage(formData)).unwrap();
      imageUrl = result.url;
    }

    const productData = {
      title: productTitle,
      category: productCategory,
      karat : parseInt(karats),
      weight : parseInt(weight),
      grossWeight : parseInt(grossWeight),
      diaWeight : parseInt(diaWeight),
      description,
      price : parseInt(price),
      labourCost : parseInt(labourCost),
      totalStock: parseInt(totalStock),
      image: imageUrl,
    };
    console.log(productData);

    // Dispatch the action to add the product
    dispatch(addProduct(productData));
    setSending(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="font-inter text-2xl font-semibold">
        <span>Add New Product</span>
      </div>
      <div className="bg-[#FFFFFF] flex flex-col gap-10 border shadow shadow-[#c0bdbd] p-9">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <img src={I1} className="w-6" alt="" />
            <span className="text-xl font-semibold">Name</span>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Product Title</span>
              <input
                type="text"
                placeholder="ex. LOTR rings"
                className="border-2 border-[#CDD1DE] p-2 w-72 rounded-sm focus:outline-none focus:border-[#666]"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Product Category</span>
              <input
                type="text"
                placeholder="Ex. Gold, Silver, etc"
                className="border-2 border-[#CDD1DE] p-2 w-96 rounded-sm focus:outline-none focus:border-[#666]"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <img src={I2} className="w-6" alt="" />
            <span className="text-xl font-semibold">Specifications</span>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Karats</span>
              <input
                type="text"
                placeholder="5000"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={karats}
                onChange={(e) => setKarats(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Weight</span>
              <input
                type="text"
                placeholder="5.2 gm"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Gross Weight</span>
              <input
                type="text"
                placeholder="12.2 gm"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={grossWeight}
                onChange={(e) => setGrossWeight(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Dia Weight</span>
              <input
                type="text"
                placeholder="0.5"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={diaWeight}
                onChange={(e) => setDiaWeight(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <img src={I3} className="w-6" alt="" />
            <span className="text-xl font-semibold">Add Description</span>
          </div>
          <textarea
            placeholder="Description..."
            className="border-2 border-[#CDD1DE] p-2 w-[80rem] h-[15rem] rounded-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Image Upload Section */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <img src={I4} className="w-6" alt="" />
            <span className="text-xl font-semibold">Add Images</span>
          </div>
          <div className="flex gap-5">
            {images.map((image, index) => (
              <div key={index} className="w-40 h-40 bg-[#E5E5E5] flex items-center justify-center rounded-md relative">
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="uploaded" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <button
                    onClick={() => document.getElementById(`file-input-${index}`).click()}
                    className="bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <span className="text-white text-2xl">+</span>
                  </button>
                )}
                <input
                  id={`file-input-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                  className="hidden"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Price and Stock Section */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <img src={I5} className="w-6" alt="" />
            <span className="text-xl font-semibold">Add Details</span>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Price</span>
              <input
                type="text"
                placeholder="5000"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Labour Cost</span>
              <input
                type="text"
                placeholder="500"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={labourCost}
                onChange={(e) => setLabourCost(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[#8E95A9] text-sm">Total Stock</span>
              <input
                type="text"
                placeholder="2000"
                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm"
                value={totalStock}
                onChange={(e) => setTotalStock(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 justify-end mt-6">
          <button
            className="text-[#4a4a4a] hover:underline"
            onClick={() => { /* Add your cancel functionality here */ }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#5A2C6D] hover:bg-[#4A2356] text-white py-2 px-6 rounded"
          >
            {!sending ? "Save" : <p className="animate-spin">i</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
