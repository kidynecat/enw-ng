import { Component, OnInit } from '@angular/core';
import {EnwServerApiService} from '../enw-server-api.service'

@Component({
  selector: 'app-dictindex',
  templateUrl: './dictindex.component.html',
  styleUrls: ['./dictindex.component.css']
})
export class DictindexComponent implements OnInit {

  keyword = "";
  wordData = null;
  starcount = 0;

  code = 500;

  isSpinning = false;

  constructor(private enwServer:EnwServerApiService) { 
    
  }

  ngOnInit() {
  }

  public search(){
    //alert(this.keyword)
    this.isSpinning = true
     this.enwServer.searchWord(this.keyword).subscribe(res => {
        this.wordData = res.response.data
        this.code = res.response.code
        this.keyword = ""

        this.starcount = 0;
        if(this.code != 500 )
        {
            let tmpd = this.wordData.star
            if(tmpd != "")
            {
                this.starcount = parseInt(tmpd.substr(-1))
            }
        }

        console.log(this.wordData)

        this.isSpinning = false
     })
    
  }

  public getTag(rank:string,rankstring:string){
    if(rank.indexOf(rankstring) >= 0)
    {
        return true
    }
    else{
        return false
    }
}

}
