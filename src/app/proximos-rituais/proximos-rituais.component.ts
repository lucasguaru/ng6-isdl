import { Component, OnInit } from '@angular/core';

import { ContentfulService } from './../service/contentful.service';
import { DomSanitizer } from '@angular/platform-browser';
const util = {
  nomeDia: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  nomeMes: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
}
@Component({
  selector: 'app-proximos-rituais',
  templateUrl: './proximos-rituais.component.html',
  styleUrls: ['./proximos-rituais.component.css']
})
export class ProximosRituaisComponent implements OnInit {

  private rituais = [];
  private protocol = 'http';

constructor(private contentfulService: ContentfulService, private sanitizer: DomSanitizer) { 
  this.protocol = window.location.href.split(":")[0];
    if (this.protocol == "file") {
      this.protocol = "http";
    }
    this.protocol = this.protocol + ":";
}

ngOnInit() {
  var ontem = new Date();
  ontem.setDate(ontem.getDate() - 1);

  var query = { content_type: 'rituais', order: 'fields.data', 'fields.exibir': true, 'fields.data[gte]': ontem };

  this.contentfulService.getProducts(query).then(contentRituais => {
    console.log(contentRituais);
    var rituais = [];
    contentRituais.forEach(entries => {
      var entry = entries.fields;
      entry.eventoFaceEmbedly = this.sanitizer.bypassSecurityTrustHtml(entry.eventoFaceEmbedly);
      var dataRitual = new Date(Date.parse(entry.data));
      var dataExtenso = dataRitual.getDate() + " de " + util.nomeMes[dataRitual.getMonth()] + " de " + dataRitual.getFullYear();

      var dataTexto = dataExtenso + " às " + dataRitual.getHours() + "h";
      entry.dataTexto = dataTexto;

      var titulo = "Meditação com Ayahuasca dia " + dataExtenso;
      entry.titulo = titulo;

      entry.imagem.fields.file.url = this.protocol + entry.imagem.fields.file.url;
      rituais.push(entry);
    });
    this.rituais = rituais;
  });
}

}
