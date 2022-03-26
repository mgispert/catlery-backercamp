import { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export const Alert = ({ onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button
        mt={4}
        variant={"outline"}
        fontWeight={"bold"}
        letterSpacing={"5px"}
        width={"100%"}
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              letterSpacing={"3px"}
            >
              Delete
            </AlertDialogHeader>
            <AlertDialogBody fontWeight={"bold"} letterSpacing={"3px"}>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter fontWeight={"bold"} letterSpacing={"5px"}>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                variant={"outline"}
                fontWeight={"bold"}
                letterSpacing={"5px"}
                width={"100%"}
                onClick={onRemove}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
