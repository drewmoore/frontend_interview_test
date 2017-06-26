import React from 'react';
import image from '../../images/advertisement.jpg';

const AdvertisementItem = () => (
  <article className="col-xs-12 col-lg-4 extra-padding" itemScope itemType="http://schema.org/Accommodation">
    <div className="gray-border">
      <div className="relative" itemProp="photo" itemScope itemType="http://schema.org/ImageObject">
        <img src={image} className="advertisement-banner" alt="Wohnung Foto" itemProp="contentUrl" />
        <a href={image} className="btn btn-default advertisement-link">Mieten</a>
      </div>
      <div className="row extra-vertical-padding">
        <div className="col-xs-10 col-xs-offset-1">
          <h4 className="advertisement-heading" itemProp="description">
            Elf Wohnungen Auf Einmal - 5% Mietrendite! MFH in Ettlingen - Schoell.
          </h4>
          <address className="advertisement-location" itemProp="address">
            35764 Sinn / Fleisbach
          </address>
          <div className="row advertisement-footer extra-vertical-padding">
            <div className="col-xs-12 col-sm-4">
              <strong>1.954 €</strong>
            </div>
            <div className="col-xs-12 col-sm-8 text-right">
              <ul className="advertisement-extras list-unstyled list-inline">
                <li itemProp="numberOfRooms" itemScope itemType="http://schema.org/QuantitativeValue">
                  <span className="hidden" itemProp="unitText">ROM</span>
                  <span itemProp="value">3</span> Zimmer
                </li>
                <li itemProp="floorSize" itemScope itemType="http://schema.org/QuantitativeValue">
                  <span className="hidden" itemProp="unitCode">MTK</span>
                  ab <span itemProp="value">35</span> m<sup>2</sup>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default AdvertisementItem;
