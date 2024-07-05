import {MdModeEdit} from 'react-icons/md'
import {IoTrashOutline} from 'react-icons/io5'

const MainCon = () => {
  ;<div>
    <TableView
      aria-label="Example table with static contents"
      selectionMode="multiple"
    >
      <TableHeader>
        <Column>All Airports</Column>
        <Column>Country</Column>
        <Column>Code</Column>
        <Column align="end">Terminals</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>IndiraGandhi International Airport</Cell>
          <Cell>India</Cell>
          <Cell>DEL</Cell>
          <Cell>3</Cell>
        </Row>
        <div>
          <button>
            <MdModeEdit />
          </button>
          <button>
            <IoTrashOutline />
          </button>
        </div>
        <Row>
          <Cell>Dubai International Airport</Cell>
          <Cell>UAE</Cell>
          <Cell>DXB</Cell>
          <Cell>5</Cell>
        </Row>
        <div>
          <button>
            <MdModeEdit />
          </button>
          <button>
            <IoTrashOutline />
          </button>
        </div>
        <Row>
          <Cell>HeathRow Airport</Cell>
          <Cell>England</Cell>
          <Cell>LHR</Cell>
          <Cell>6</Cell>
        </Row>
        <div>
          <button>
            <MdModeEdit />
          </button>
          <button>
            <IoTrashOutline />
          </button>
        </div>
        <Row>
          <Cell>Istanbul Airport</Cell>
          <Cell>Turkey</Cell>
          <Cell>IST</Cell>
          <Cell>3</Cell>
        </Row>
        <div>
          <button>
            <MdModeEdit />
          </button>
          <button>
            <IoTrashOutline />
          </button>
        </div>
        <Row>
          <Cell>Rajiv Gandhi International Airport</Cell>
          <Cell>Texas</Cell>
          <Cell>DFW</Cell>
          <Cell>14</Cell>
        </Row>
        <div>
          <button>
            <MdModeEdit />
          </button>
          <button>
            <IoTrashOutline />
          </button>
        </div>
      </TableBody>
    </TableView>
  </div>
}

export default MainCon
