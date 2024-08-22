"use client"
import { useState } from "react";

const useImage = () => {
	const [imgUrl, setImgUrl] = useState(null);
    const [file, setFile] = useState(null);

	const handleImageChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile && selectedFile.type.startsWith("image/")) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setImgUrl(reader.result);
                setFile(selectedFile);
			};

			reader.readAsDataURL(selectedFile);
		} else {
            console.error("ada yang error", error)
			setImgUrl(null);
            setFile(null)
		}
	};
	return { handleImageChange, imgUrl, setImgUrl,file };
};

export default useImage;
