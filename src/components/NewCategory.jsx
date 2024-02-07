import React from 'react'

function NewCategory() {
  return (

    <div class="container mx-auto">
      <div class="mx-auto">
        <div class="card shadow-xl md:w-full lg:w-full bg-slate-100">
          <div class="card-body md:w-full lg:w-full flex flex-col items-center">
            <label class="form-control">
              <div class="label">
                <h2 class="label-text">New Category</h2>
              </div>
              <input type="text" placeholder="Category" class="input input-bordered w-full" />
            </label>
            <div class="flex gap-4 mt-4">
              <button class="btn btn-info btn-sm">Small</button>
              <button class="btn btn-info btn-sm">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default NewCategory
