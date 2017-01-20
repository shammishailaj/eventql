/**
 * Copyright (c) 2017 DeepCortex GmbH <legal@eventql.io>
 * Authors:
 *   - Laura Schlimmer <laura@eventql.io>
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License ("the license") as
 * published by the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * In accordance with Section 7(e) of the license, the licensing of the Program
 * under the license does not imply a trademark license. Therefore any rights,
 * title and interest in our trademarks remain entirely with us.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the license for more details.
 *
 * You can be released from the requirements of the license by purchasing a
 * commercial license. Buying such a license is mandatory as soon as you develop
 * commercial activities involving this program without disclosing the source
 * code of your own applications
 */

Formatter = this.Formatter || {};

Formatter.DefaultTimeFormat = "%Y-%m-%d %H:%M:%S";

Formatter.formatDate = function(timestamp, format) {
  if (!format) {
    format = Formatter.DefaultTimeFormat;
  }

  var d = new Date(timestamp);
  var formatted = format;
  formatted = formatted.replace("%Y", d.getFullYear());
  formatted = formatted.replace("%m", d.getMonth() + 1);
  formatted = formatted.replace("%d", d.getDate());
  formatted = formatted.replace("%H", d.getHours());
  formatted = formatted.replace("%M", d.getMinutes());
  formatted = formatted.replace("%S", d.getSeconds());

  return formatted;
}
