import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {Item} from "../../shared/models/item";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: string[];
  itemInfo: Item;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly afs: AngularFirestore, private readonly storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.item = params.item.split("/")
      console.log(this.item)

      this.getItemDetail()
    })
  }


  getItemDetail() {
    let currentItem: any;

    this.afs.collection(this.item[1], ref =>
      ref.where('itemId', '==', this.item[2])
    ).valueChanges().subscribe(itemRes => {
      if (itemRes?.length > 0) {
        currentItem = itemRes[0]
        this.afs.collection('users').doc(this.item[0]).valueChanges().subscribe(userRef => {
          let ownerInfo
          ownerInfo = userRef;
          currentItem.ownerInfo = ownerInfo;
          currentItem.imagesUrl = [];

          this.storage.ref(this.item[1] + '/' + this.item[0] + '/' + this.item[2]).listAll().subscribe(images => {
            images.items.forEach(i => {
              i.getDownloadURL().then(res => {
                currentItem.imagesUrl.push(res)
              })
            })
          })

          this.itemInfo = currentItem;
        })


      }
    })


  }


}
