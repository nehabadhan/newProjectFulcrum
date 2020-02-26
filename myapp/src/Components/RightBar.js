import React, { Component } from "react";
import Person from "./images/faces men 01.png";
import Person1 from "./images/faces men 02.png";
import Person2 from "./images/faces men 03.png";
import Person3 from "./images/faces men 04.png";
import Person4 from "./images/faces men 05.png";
import Person5 from "./images/faces men 06.png";
import Person6 from "./images/faces women 01.png";
import Person7 from "./images/faces women 02.png";

class RightBar extends Component {
  render() {
    return (
      <div class="container">
        <p style={{fontSize: "14px"}}><b>Recently Used</b></p>
        <table class="table table-bordered table-secondary" id="tableBorder">
          <tbody>
            <tr class="round3">
              <td>Dataset</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person7} class="roundedImage"/>
                  Ricky
                </div>
              </td>
              <td>
                <div>Created 09/10/2019</div>
                <div>Last Modified <b>50 min ago</b></div>
              </td>
            </tr>
            <tr>
              <td>Expense Report</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person6} class="roundedImage"/>
                  Daemon
                </div>
              </td>
              <td>
                <div>Created 10/10/2019</div>
                <div>Last Modified <b>20 min ago</b></div>
              </td>
            </tr>
            <tr>
              <td>People</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person1} class="roundedImage"/>
                  Alena
                </div>
              </td>
              <td>
                <div>Created 11/10/2019</div>
                <div>Last Modified <b>10 min ago</b></div>
              </td>
            </tr>
            <tr>
              <td>Sample Use Cases</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person2} class="roundedImage"/>
                  Jeremy
                </div>
              </td>
              <td>
                <div>Created 12/10/2019</div>
                <div>Last Modified <b>60 min ago</b></div>
              </td>
            </tr>
            <tr>
              <td>People</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person3} class="roundedImage"/>
                  Stephen
                </div>
              </td>
              <td>
                <div>Created 01/10/2019</div>
                <div>Last Modified <b>50 min ago</b></div>
              </td>
            </tr>
            <tr>
              <td>Apps</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person4} class="roundedImage"/>
                  Harry
                </div>
              </td>
              <td>
                <div>Created 02/10/2019</div>
                <div>Last Modified <b>40 min ago</b></div>
              </td>
            </tr>
            <tr>
              <td>Document</td>
              <td>
                <div>Owner</div>
                <div>
                  <img src={Person5} class="roundedImage"/>
                  Lopa
                </div>
              </td>
              <td>
                <div>Created 03/10/2019</div>
                <div>Last Modified <b>30 min ago</b></div>
              </td>
            </tr>
          </tbody>
        </table>
        <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
      </div>
    );
  }
}

export default RightBar;
