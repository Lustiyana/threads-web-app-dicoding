import { Icon } from '@iconify/react'

const PostModal = () => {
  return (
    <>
      <button
          className="btn btn-primary absolute bottom-8 right-8"
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
            <form action="" className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Judul"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Kategori"
                className="input input-bordered w-full"
              />
              <textarea
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </form>
          </div>
        </dialog>
    </>
  )
}

export default PostModal