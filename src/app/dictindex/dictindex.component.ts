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
  isSpinning = false

  WordgroupCount =0
  displayWordgroup = []
  isWordgroupOpen =false

  ExampleCount =0
  displayExamplegroup = []
  isExamplegroupOpen = false

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

            this.isWordgroupOpen = false
            this.WordgroupCount = this.wordData.wordgroup.length

            if(this.WordgroupCount >= 5)
            {
                this.displayWordgroup = this.wordData.wordgroup.slice(0,4)
            }
            else{
                this.displayWordgroup = this.wordData.wordgroup
            }

            this.isExamplegroupOpen = false
            this.ExampleCount = this.wordData.wordexample.length

            if(this.ExampleCount >= 5)
            {
                this.displayExamplegroup = this.wordData.wordexample.slice(0,4)
            }
            else{
                this.displayExamplegroup = this.wordData.wordexample
            }

        }

        console.log(this.wordData)

        this.isSpinning = false
     })
    
  }

  public openWordgroup(type:number){
    if(type == 1)
    {
        this.displayWordgroup = this.wordData.wordgroup
        this.isWordgroupOpen = true;
    }
    else{
        this.displayWordgroup = this.wordData.wordgroup.slice(0,4)
        this.isWordgroupOpen = false;
    }
  }

  public openExamplegroup(type:number){
    if(type == 1)
    {
        this.displayExamplegroup = this.wordData.wordexample
        this.isExamplegroupOpen = true;
    }
    else{
        this.displayExamplegroup = this.wordData.wordexample.slice(0,4)
        this.isExamplegroupOpen = false;
    }
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
