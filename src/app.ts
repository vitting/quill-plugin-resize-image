import  Quill from "quill";
import ImageResize from "./index";

Quill.register('modules/imageResize', ImageResize);
const quill = new Quill("#editor", {
  modules: {
    imageResize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
      handleStyles: {
        // backgroundColor: 'black',
        // width: "25px",
        // height: "25px"
    }
    },
    toolbar: {
      container: [
        ["bold", "italic"],
        ["link", "blockquote", "code-block", "image"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
      handlers: {
      },
    },
  },
  placeholder: "",
  theme: "snow",
});
