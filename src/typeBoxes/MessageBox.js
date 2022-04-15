    function MessageBox (message, time) {
    return (
                        <tr>
                          <td>
                            <p className="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">
                             {message}
                            </p>
                          </td>
                          <td>
                            <p className="p-1 mt-2 mr-3 shadow-sm">
                              <small>{time} PM</small>
                            </p>
                          </td>
                        </tr>
    ) ;
}



export default MessageBox;