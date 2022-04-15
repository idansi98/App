function AboveContactsRow() {
    return (
        <div className="col-sm-4 border-right border-secondary">
        <img
          src="/IMG-8479.PNG"
          alt=""
          className="profile-image rounded-circle"
        />
        {/*The three left buttons*/}
        <span className="float-right mt-2">
          {/*The left button*/}
          <button type="button" className="btn btn-light" id = "AddContact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            className="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          </button>
        </span>
      </div>
    )
}
export default AboveContactsRow;