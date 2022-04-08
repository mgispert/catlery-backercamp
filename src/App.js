import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, AlertIcon, Flex } from "@chakra-ui/react";
import { getTags, addCat, editCat, removeCat } from "./features/cats/catSlice";

import { CreateCat, EditCat, Navbar, Footer, CatsGallery } from "./components";

function App() {
  const cats = useSelector((state) => state.cats.catsList);
  const error = useSelector((state) => state.cats.errorMessage);

  const dispatch = useDispatch();
  const [isModalShown, showEditModal] = useState(false);
  const [catSelected, setCatSelected] = useState(undefined);

  const handleAddCat = (newCat) => dispatch(addCat(newCat));

  const handleEditCat = (catUrl) =>
    dispatch(editCat({ index: catSelected, url: catUrl }));

  const handleCatClicked = (catIndex) => {
    showEditModal(true);
    setCatSelected(catIndex);
  };

  const handleRemoveCat = () => dispatch(removeCat(catSelected));

  const handleCloseEdit = () => showEditModal(false);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <Flex flexDirection="column" alignItems="center" height="100%">
      <Navbar />
      <CreateCat onSubmit={handleAddCat} />
      {isModalShown && (
        <EditCat
          urlCat={cats[catSelected]}
          onClose={handleCloseEdit}
          onEdit={handleEditCat}
          onRemove={handleRemoveCat}
        />
      )}
      <CatsGallery cats={cats} onCatClicked={handleCatClicked} />
      <Footer />
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Flex>
  );
}

export default App;
