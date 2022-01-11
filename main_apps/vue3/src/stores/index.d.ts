import { ITabsViewState } from './modules/tabsView'
import { CommonState } from './modules/commonStore'

export interface IStore {
  tabsView: ITabsViewState;
  CommonState: CommonState;
}
