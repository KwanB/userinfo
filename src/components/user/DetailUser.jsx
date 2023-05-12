import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ open, setOpen, dataDetail }) {
  const { hair } = dataDetail;
  const { address } = dataDetail;
  const { coordinates } = address;
  const { bank } = dataDetail;
  console.log('bank',bank);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Detail User"}</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-4">
            <div className="font-medium">Username :</div>
            <div>{dataDetail.username}</div>

            <div className="font-medium">Password :</div>
            <div>{dataDetail.password}</div>
          </div>

          <div className="grid grid-cols-4">
            <div className="font-medium">BloodGroup :</div>
            <div>{dataDetail.bloodGroup}</div>

            <div className="font-medium">EyeColor :</div>
            <div>{dataDetail.eyeColor}</div>
          </div>

          <div className="grid grid-cols-4 ">
            <div className="font-medium">Height :</div>
            <div>{dataDetail.height}</div>

            <div className="font-medium">Weight :</div>
            <div>{dataDetail.weight}</div>
          </div>

          <div className="font-semibold text-lg mt-2 text-blue-800">hair</div>
          <div className="grid grid-cols-4 ">
            <div className="font-medium">Color :</div>
            <div>{hair.color}</div>
          </div>
          <div className="grid grid-cols-4 mb-2">
            <div className="font-medium">Type :</div>
            <div>{hair.type}</div>
          </div>

          <div className="grid grid-cols-4">
            <div className="font-medium">Domain :</div>
            <div>{dataDetail.domain}</div>

            <div className="font-medium">IP :</div>
            <div>{dataDetail.ip}</div>
          </div>

          <div className="grid grid-cols-4 ">
            <div className="font-medium">MacAddress :</div>
            <div>{dataDetail.macAddress}</div>

            <div className="font-medium">University :</div>
            <div>{dataDetail.university}</div>
          </div>

          <div className="font-semibold text-lg mt-2 text-blue-800">
            Address
          </div>
          <div className="flex ">
            <div className="font-medium">Address :</div>
            <div className="ml-16">{address.address}</div>
          </div>
          <div className="grid grid-cols-4 mb-2">
            <div className="font-medium">City :</div>
            <div>{address.city}</div>
          </div>
          <div className="grid grid-cols-4 mb-2">
            <div className="font-medium">coordinates :</div>
            <div>
              <div>lat: {coordinates.lat}</div>
              <div>lng: {coordinates.lng}</div>
            </div>
          </div>
          <div className="grid grid-cols-4 mb-2">
            <div className="font-medium">PostalCode :</div>
            <div>{address.postalCode}</div>
          </div>
          <div className="grid grid-cols-4 mb-2">
            <div className="font-medium">State :</div>
            <div>{address.state}</div>
          </div>

          <div className="font-semibold text-lg mt-2 text-blue-800">Bank</div>
          <div className="grid grid-cols-4 ">
            <div className="font-medium">CardExpire :</div>
            <div>{bank.cardExpire}</div>
          </div>
          <div className="grid grid-cols-4 mb-2">
            <div className="font-medium">CardNumber :</div>
            <div>{bank.cardNumber}</div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>กลับ</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
