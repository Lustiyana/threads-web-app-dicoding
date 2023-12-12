import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postThread } from "../../redux/features/newThread/action";

const PostModal = () => {
  const [modifiedData, setModifiedData] = useState({
    title: "",
    body: "",
    category: "",
  });
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postThread(modifiedData))
  }

  return (
    <>
      <button
        className="btn btn-primary fixed bottom-8 right-8"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <Icon icon="ic:round-plus" width={24} height={24} />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-8">Buat Diskusi Baru</h3>
          <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Judul"
              className="input input-bordered w-full"
              value={modifiedData.title}
              onChange={(e) =>
                setModifiedData({ ...modifiedData, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Kategori"
              className="input input-bordered w-full"
              value={modifiedData.category}
              onChange={(e) =>
                setModifiedData({ ...modifiedData, category: e.target.value })
              }
            />
            <textarea
              className="textarea textarea-bordered textarea-lg w-full"
              onChange={(e) =>
                setModifiedData({ ...modifiedData, body: e.target.value })
              }
              value={modifiedData.body}
            />
            <button className="btn btn-primary" type="submit">TAMBAH</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PostModal;
